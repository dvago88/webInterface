package com.ciclobosque.webInterface.entity;

import java.time.LocalDateTime;

public class DataEntity {

    private Long id;

    private String rfid;
    private int statationNumber;
    private int sensor2;
    private int sensor3;
    private int sensor4;

    private LocalDateTime localDateTime;

    public DataEntity() {
    }

    public DataEntity(String rfid, int statationNumber, int sensor2, int sensor3, int sensor4, LocalDateTime localDateTime) {
        this.rfid = rfid;
        this.statationNumber = statationNumber;
        this.sensor2 = sensor2;
        this.sensor3 = sensor3;
        this.sensor4 = sensor4;
        this.localDateTime = localDateTime;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRfid() {
        return rfid;
    }

    public void setRfid(String rfid) {
        this.rfid = rfid;
    }

    public int getStatationNumber() {
        return statationNumber;
    }

    public void setStatationNumber(int statationNumber) {
        this.statationNumber = statationNumber;
    }

    public int getSensor2() {
        return sensor2;
    }

    public void setSensor2(int sensor2) {
        this.sensor2 = sensor2;
    }

    public int getSensor3() {
        return sensor3;
    }

    public void setSensor3(int sensor3) {
        this.sensor3 = sensor3;
    }

    public int getSensor4() {
        return sensor4;
    }

    public void setSensor4(int sensor4) {
        this.sensor4 = sensor4;
    }

    public LocalDateTime getLocalDateTime() {
        return localDateTime;
    }

    public void setLocalDateTime(LocalDateTime localDateTime) {
        this.localDateTime = localDateTime;
    }
}