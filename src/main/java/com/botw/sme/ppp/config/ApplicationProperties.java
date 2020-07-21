package com.botw.sme.ppp.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.web.cors.CorsConfiguration;


/**
 * Holds the configuration used by application
 * */
@ConfigurationProperties(prefix = "application", ignoreUnknownFields = false)
public class ApplicationProperties {

  private CorsConfiguration cors = new CorsConfiguration();

  private String customerApplicationEmail;

  private String applicationEmail;

  private String backOfficeEmail;

  public CorsConfiguration getCors() {
    return cors;
  }

  public void setCors(CorsConfiguration cors) {
    this.cors = cors;
  }

  public String getApplicationEmail() {
    return applicationEmail;
  }

  public void setApplicationEmail(String applicationEmail) {
    this.applicationEmail = applicationEmail;
  }

  public String getCustomerApplicationEmail() {
    return customerApplicationEmail;
  }

  public void setCustomerApplicationEmail(String customerApplicationEmail) {
    this.customerApplicationEmail = customerApplicationEmail;
  }
}
