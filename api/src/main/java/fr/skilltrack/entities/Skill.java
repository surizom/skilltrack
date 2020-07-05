package fr.skilltrack.entities;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
@EqualsAndHashCode
public class Skill implements Serializable {
  private static final long serialVersionUID = 1L;

  private int id;

  private String name;

  private int importance;

  private List<SkillEvaluation> evaluations = new ArrayList<>();
}
