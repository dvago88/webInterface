package com.ciclobosque.webInterface;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

//@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan
public class WebInterfaceApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebInterfaceApplication.class, args);
	}
}
