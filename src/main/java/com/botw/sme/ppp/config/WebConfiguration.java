package com.botw.sme.ppp.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.web.server.MimeMappings;
import org.springframework.boot.web.server.WebServerFactory;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.ServletContextInitializer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.core.env.Environment;
import org.springframework.http.MediaType;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import java.io.File;
import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Paths;

import static java.net.URLDecoder.decode;

@Configuration
public class WebConfiguration implements ServletContextInitializer, WebServerFactoryCustomizer<WebServerFactory> {

  private final Logger log = LoggerFactory.getLogger(WebConfiguration.class);

  private final Environment env;

  private final ApplicationProperties applicationProperties;

  public WebConfiguration(Environment env, ApplicationProperties applicationProperties) {
    this.env = env;
    this.applicationProperties = applicationProperties;
  }

  @Override
  public void onStartup(ServletContext servletContext) throws ServletException {
    if (env.getActiveProfiles().length != 0) {
      log.info("Web application configuration, using profiles: {}", (Object[]) env.getActiveProfiles());
    }
    log.info("Web application fully configured");
  }

  private void setMimeMappings(WebServerFactory server) {
    if (server instanceof ConfigurableServletWebServerFactory) {
      MimeMappings mappings = new MimeMappings(MimeMappings.DEFAULT);
      // IE issue, see https://github.com/jhipster/generator-jhipster/pull/711
      mappings.add("html", MediaType.TEXT_HTML_VALUE + ";charset=" + StandardCharsets.UTF_8.name().toLowerCase());
      // CloudFoundry issue, see https://github.com/cloudfoundry/gorouter/issues/64
      mappings.add("json", MediaType.TEXT_HTML_VALUE + ";charset=" + StandardCharsets.UTF_8.name().toLowerCase());
      ConfigurableServletWebServerFactory servletWebServer = (ConfigurableServletWebServerFactory) server;
      servletWebServer.setMimeMappings(mappings);
    }
  }

  private void setLocationForStaticAssets(WebServerFactory server) {
    if (server instanceof ConfigurableServletWebServerFactory) {
      ConfigurableServletWebServerFactory servletWebServer = (ConfigurableServletWebServerFactory) server;
      File root;
      String prefixPath = resolvePathPrefix();
      root = new File(prefixPath + "build/resources/main/static/");
      if (root.exists() && root.isDirectory()) {
        servletWebServer.setDocumentRoot(root);
      }
    }
  }

  /**
   * Resolve path prefix to static resources.
   */
  private String resolvePathPrefix() {
    String fullExecutablePath;
    try {
      fullExecutablePath = decode(this.getClass().getResource("").getPath(), StandardCharsets.UTF_8.name());
    } catch (UnsupportedEncodingException e) {
      /* try without decoding if this ever happens */
      fullExecutablePath = this.getClass().getResource("").getPath();
    }
    String rootPath = Paths.get(".").toUri().normalize().getPath();
    String extractedPath = fullExecutablePath.replace(rootPath, "");
    int extractionEndIndex = extractedPath.indexOf("build/");
    if (extractionEndIndex <= 0) {
      return "";
    }
    return extractedPath.substring(0, extractionEndIndex);
  }

  @Override
  public void customize(WebServerFactory factory) {
    setMimeMappings(factory);
    // When running in an IDE or with ./gradlew bootRun, set location of the static web assets.
    setLocationForStaticAssets(factory);
  }

  @Bean
  public CorsFilter corsFilter() {
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    CorsConfiguration config = applicationProperties.getCors();
    if (config.getAllowedOrigins() != null && !config.getAllowedOrigins().isEmpty()) {
      log.debug("Registering CORS filter");
      source.registerCorsConfiguration("/api/**", config);
      source.registerCorsConfiguration("/get/**", config);
      source.registerCorsConfiguration("/management/**", config);
      source.registerCorsConfiguration("/v2/api-docs", config);
    }
    return new CorsFilter(source);
  }

  @Bean
  public MessageSource messageSource() {
    ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
    messageSource.setBasenames("/WEB-INF/classes/i18n/message", "classpath:i18n/message");
    return messageSource;
  }
}
