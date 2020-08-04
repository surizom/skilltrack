package fr.skilltrack.entities;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;
import java.util.SortedMap;
import java.util.TreeMap;

@Data
@EqualsAndHashCode
public class Skill implements Serializable {
  private static final long serialVersionUID = 1L;

  private int id;

  private String name;

  private SkillImportanceLabel importance;

  private String resourceUrl;

  private SortedMap<Integer, SkillEvaluation> evaluations = new TreeMap<>();

  public SkillImportance importance() {
    SkillImportance importance = new SkillImportance();
    importance.setLabel(this.importance);
    importance.setValue(this.importance.importanceValue());
    return importance;
  }
}
