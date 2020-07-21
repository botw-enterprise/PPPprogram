package com.botw.sme.ppp.resources;

import com.botw.sme.ppp.domain.CareAct;
import com.botw.sme.ppp.service.BackOfficeServiceImpl;
import com.botw.sme.ppp.service.MailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api")
public class SBAPPPResources {

  private final Logger log = LoggerFactory.getLogger(SBAPPPResources.class);

  private final MailService mailService;
  private final Environment environment;
  private final BackOfficeServiceImpl backOfficeServiceImpl;

  public SBAPPPResources(MailService mailService, Environment environment, BackOfficeServiceImpl backOfficeServiceImpl){
    this.mailService = mailService;
    this.environment = environment;
    this.backOfficeServiceImpl = backOfficeServiceImpl;
  }

  /**
   * An API for processing application
   *
   * @param careAct holds the object structure for processing application.
   * */
  @PostMapping(value="/processApplication")
  public ResponseEntity<CareAct> createDocument(@RequestBody CareAct careAct) {
    try {
      this.mailService
        .sendCustomerCopy(careAct);
      // Implement your back office API here
      this.backOfficeServiceImpl.makeAnAPICall();
      return new ResponseEntity<>(careAct, HttpStatus.OK);
    } catch (Exception e) {
      log.error(e.getLocalizedMessage());
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  /**
   * An API for getting application profiles.
   * */
  @GetMapping("/profile")
  public ResponseEntity<List<String>> getProfile() {
    List<String> activeProfiles = Arrays.asList(this.environment.getActiveProfiles());
    return new ResponseEntity<>(activeProfiles, HttpStatus.OK);
  }

}
