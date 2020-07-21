package com.botw.sme.ppp;

import com.botw.sme.ppp.config.ApplicationProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({ApplicationProperties.class})
public class PPPApplication {

    public static void main(String[] args) {
        SpringApplication.run(PPPApplication.class, args);
    }

}
