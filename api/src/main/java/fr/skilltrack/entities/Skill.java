package fr.skilltrack.entities;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

@Data
@EqualsAndHashCode
public class Skill implements Serializable {
  private static final long serialVersionUID = 1L;

  private int id;

  private String name;

  private int importance;
}
