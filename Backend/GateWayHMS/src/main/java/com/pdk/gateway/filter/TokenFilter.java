package com.pdk.gateway.filter;

import org.springframework.http.HttpHeaders;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

@Component
public class TokenFilter extends AbstractGatewayFilterFactory<TokenFilter.Config> {

    private static final String SECRET_KEY = "sXB6NcsSRGoKhFqhOPIHJGFDSHLJKJHGjcodyfg8owdygfoenx9ueyhgfoiFDGH5rdyfghytrdfgI2lBsvV+RlzEgvb09XJb1gkhZU=";

    public TokenFilter() {
        super(Config.class);
    }

    public static class Config {

    }

    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {
            String path = exchange.getRequest().getPath().toString();
            if (path.equals("/users/login") || path.equals("/users/register")) {
                return chain.filter(exchange.mutate().request(r -> r.header("X-Secret-Key", "SECRECT")).build());
            }
            HttpHeaders headers = exchange.getRequest().getHeaders();
            if (!headers.containsKey(HttpHeaders.AUTHORIZATION)) {
                // exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
                throw new RuntimeException("Authorization header is missing");
            }
            String authHeader = headers.getFirst(HttpHeaders.AUTHORIZATION);
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                throw new RuntimeException("Authorization header is invalid");
            }
            String token = authHeader.substring(7);

            try {
                Claims claims = Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
                exchange = exchange.mutate().request(r -> r.header("X-Secret-Key", "SECRECT")).build();
            } catch (Exception e) {
                throw new RuntimeException("Token is invalid or expired");
            }
            return chain.filter(exchange);
        };
    }
}
