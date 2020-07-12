package fr.skilltrack.entities;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
public class SkillImportance {
  private SkillImportanceLabel label;
  private int value;
}
