package com.botw.sme.ppp.domain;


import java.util.List;

public class DataModel {

  private Object data;

  private List<DocumentList> fileList;

  public Object getData() {
    return data;
  }

  public void setData(Object data) {
    this.data = data;
  }

  public List<DocumentList> getFileList() {
    return fileList;
  }

  public void setFileList(List<DocumentList> fileList) {
    this.fileList = fileList;
  }
}
