package irinakjoseva.vecnamoda.configuration;

import irinakjoseva.vecnamoda.configuration.jwt.JwtProperties;
import irinakjoseva.vecnamoda.configuration.jwt.JwtTokenAuthenticationFilter;
import irinakjoseva.vecnamoda.configuration.jwt.JwtUsernameAndPasswordAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.http.HttpServletResponse;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserDetailsServiceImpl userDetailsService;
    private final JwtProperties jwtProperties;

    public WebSecurityConfig(UserDetailsServiceImpl userDetailsService, JwtProperties jwtProperties) {
        this.userDetailsService = userDetailsService;
        this.jwtProperties = jwtProperties;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests().anyRequest().permitAll();
//                .exceptionHandling()
//                    .authenticationEntryPoint(((request, response, authException) -> {
//                        response.sendError(HttpServletResponse.SC_UNAUTHORIZED);
//                    }))
//                .and()
//                .addFilter(
//                        new JwtUsernameAndPasswordAuthenticationFilter(authenticationManager(), jwtProperties))
//                    .addFilterAfter(
//                            new JwtTokenAuthenticationFilter(jwtProperties, userDetailsService),
//                            UsernamePasswordAuthenticationFilter.class)
//                .authorizeRequests()
//                    .antMatchers(HttpMethod.POST, jwtProperties.getUri())
//                        .permitAll()
//                    .antMatchers(HttpMethod.OPTIONS)
//                        .permitAll()
//                    .antMatchers(getPublicPaths())
//                        .permitAll()
//                    .anyRequest().authenticated();

    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    private String[] getPublicPaths() {
        return new String[]{
                "/api/users/hello",
                "/api/users/register",
                "/api/article/public" // ? supposedly something like this should be implemented
        };
    }

}
