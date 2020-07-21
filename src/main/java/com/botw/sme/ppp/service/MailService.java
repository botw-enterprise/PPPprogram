package com.botw.sme.ppp.service;

import com.botw.sme.ppp.config.ApplicationProperties;
import com.botw.sme.ppp.domain.CareAct;
import com.botw.sme.ppp.domain.DocumentList;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.MessageSource;
import org.springframework.core.env.Environment;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.activation.DataSource;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.mail.util.ByteArrayDataSource;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.*;

@Service
public class MailService {

  private final Logger log = LoggerFactory.getLogger(MailService.class);

  private static final String USER = "user";

  private static final String BASE_URL = "baseUrl";

  private static final String REF_ID = "refId";

  private static final String CARE_RECORDS = "careRecords";

  private final ApplicationProperties applicationProperties;

  private final JavaMailSender javaMailSender;

  private final MessageSource messageSource;

  private final SpringTemplateEngine templateEngine;

  private int count = 0;

  private final Environment environment;

  public MailService(ApplicationProperties jHipsterProperties, JavaMailSender javaMailSender,
                     MessageSource messageSource, SpringTemplateEngine templateEngine, Environment environment) {

    this.applicationProperties = jHipsterProperties;
    this.javaMailSender = javaMailSender;
    this.messageSource = messageSource;
    this.templateEngine = templateEngine;
    this.environment = environment;
  }

  @Async
  public void sendEmail(String email, String subject, String content,
                        boolean isMultipart, boolean isHtml, CareAct careAct, String user) {
    log.debug("Send email[multipart '{}' and html '{}'] to '{}' with subject '{}' and content={}",
      isMultipart, isHtml, email, subject, content);
    // Prepare message using a Spring helper
    MimeMessage mimeMessage = javaMailSender.createMimeMessage();
    try {
      MimeMessageHelper message = new MimeMessageHelper(mimeMessage, isMultipart, StandardCharsets.UTF_8.name());
      message.setTo(email);
      message.setText(content, isHtml);
      if (careAct != null) {
        message.setFrom(applicationProperties.getCustomerApplicationEmail());
        message.setSubject(subject.replace("{0}", careAct.getReferenceId()));
        javaMailSender.send(mimeMessage);
      }
      log.debug("Sent email to User '{}'", email);
    } catch (Exception e) {
      if (log.isDebugEnabled()) {
        log.warn("Email could not be sent to user '{}'", email, e);
      } else {
        log.warn("Email could not be sent to user '{}': {}", email, e.getMessage());
      }
    }
  }

  @Async
  public void sendEmailFromTemplate(String email, String templateName, String titleKey, CareAct careAct, String user) {
    Locale locale = Locale.forLanguageTag("en");
    Context context = new Context(locale);
    context.setVariable(REF_ID, careAct.getReferenceId());
    context.setVariable(USER, careAct.getName());
    context.setVariable(BASE_URL, "care.your-org.com");
    context.setVariable(CARE_RECORDS, careAct);
    String content = templateEngine.process(templateName, context);
    String subject = messageSource.getMessage(titleKey, null, locale);
    Collection<String> activeProfiles = Arrays.asList(this.environment.getActiveProfiles());
    if (activeProfiles.contains("TEST")) {
      String updatedSub = "[TEST] - " + activeProfiles.toString() + subject;
      sendEmail(email, updatedSub, content, true, true, careAct, user);
    } else {
      sendEmail(email, subject, content, true, true, careAct, user);
    }
  }

  @Async
  public void sendCustomerCopy( CareAct careAct) {
    log.debug("Sending activation email to '{}'", careAct.getEmailId());
    sendEmailFromTemplate(careAct.getEmailId(),
      "mail/customerEmail",
      "email.customer.title",
      careAct, "customer");
  }
}
