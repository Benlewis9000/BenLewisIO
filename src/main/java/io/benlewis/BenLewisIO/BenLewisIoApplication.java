package io.benlewis.BenLewisIO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.StaticResourceLocation;
import org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.thymeleaf.templateresolver.FileTemplateResolver;
import org.thymeleaf.templateresolver.ITemplateResolver;

@SpringBootApplication
public class BenLewisIoApplication {

	public static void main(String[] args) {
		SpringApplication.run(BenLewisIoApplication.class, args);
	}

	/*
	 * Following used to enable hot swapping of resources (templates, front-end etc.).
	 * Source: https://stackoverflow.com/a/41933216/3463792
	 */
	@Autowired
	private ThymeleafProperties properties;
	@Value("${spring.thymeleaf.templates_root:}")
	private String templatesRoot;
	@Bean
	public ITemplateResolver defaultTemplateResolver() {
		FileTemplateResolver resolver = new FileTemplateResolver();
		resolver.setSuffix(properties.getSuffix());
		resolver.setPrefix(templatesRoot);
		resolver.setTemplateMode(properties.getMode());
		resolver.setCacheable(properties.isCache());
		return resolver;
	}

}
