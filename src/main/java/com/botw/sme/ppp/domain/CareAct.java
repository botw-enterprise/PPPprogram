package com.botw.sme.ppp.domain;

public class CareAct {

  private String referenceId;

  private String emailId;

  private String name;

  private DataModel dataModel;

  public String getReferenceId() {
    return referenceId;
  }

  public void setReferenceId(String referenceId) {
    this.referenceId = referenceId;
  }

  public DataModel getDataModel() {
    return dataModel;
  }

  public void setDataModel(DataModel dataModel) {
    this.dataModel = dataModel;
  }

  public String getEmailId() {
    return emailId;
  }

  public void setEmailId(String emailId) {
    this.emailId = emailId;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
}
