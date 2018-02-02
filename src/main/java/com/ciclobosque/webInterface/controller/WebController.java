package com.ciclobosque.webInterface.controller;

import com.ciclobosque.webInterface.entity.DataEntity;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

@Controller
public class WebController {

    @RequestMapping("/")
    public String home() {
//        String uri = "https://aqueous-temple-46001.herokuapp.com";
//        RestTemplate template = new RestTemplate();
//        String result = template.getForObject(uri, String.class);
//        JSONObject response = new JSONObject(result);
//        JSONArray content = response.getJSONArray("content");

//        JSONPObject object = new JSONPObject(result, DataEntity.class);
//        ResponseEntity<DataEntity> dataEntity = template.getForEntity(uri, DataEntity.class);
//        System.out.println(result);

        return "home";
    }
}
