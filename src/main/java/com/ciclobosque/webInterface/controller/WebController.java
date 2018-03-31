package com.ciclobosque.webInterface.controller;

import com.ciclobosque.webInterface.entity.DataEntity;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Controller
public class WebController {

    private final String[] meses = {"Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"
            , "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"};

    @RequestMapping("/")
    public String home(Model model) {
        String username = " ";
        String jwt = " ";
        String primerNombre = " ";
        model.addAttribute("username", username);
        model.addAttribute("jwt", jwt);
        model.addAttribute("primerNombre", primerNombre);

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

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public String homeLogged(@RequestParam("username") String username, Model model,
                             @RequestParam("jwt") String jwt,
                             @RequestParam("primerNombre") String primerNombre) {
        model.addAttribute("username", username);
        model.addAttribute("jwt", jwt);
        model.addAttribute("primerNombre", primerNombre);
        return "home";
    }

    @RequestMapping(value = "/userprofile", method = RequestMethod.POST)
    public String userPage(@RequestParam("username") String username, Model model, @RequestParam("jwt") String jwt) {
        model.addAttribute("username", username);
        model.addAttribute("jwt", jwt);

        LocalDateTime localDateTime = LocalDateTime.now();
        int mesInicial = localDateTime.getMonthValue() - 6;
        if (mesInicial < 0) {
            mesInicial = 12 + mesInicial;
        }

        for (int i = 0; i < 6; i++) {
            model.addAttribute("nombreMes" + (i + 1), meses[i + mesInicial]);
            if (mesInicial + i == 11) {
                mesInicial = -i - 1;
            }
        }

        //TODO: pasar los nombres de los ultimos 6 meses para la grafica
//        TODO: pasar el id del usuario
        return "users/user";
    }

    @RequestMapping("/login")
    public String loginPage() {
        return "login";
    }
}
