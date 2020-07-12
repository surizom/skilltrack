package fr.skilltrack.entities;

public enum SkillImportance {
  Optional("1"),
  Good_to_know("2"),
  Important("3"),
  Vital("4");
  private final String importanceValue;

  public int importanceValue() {
    return Integer.parseInt(this.importanceValue);
  }

  private SkillImportance(String importanceValue) {
    this.importanceValue = importanceValue;
  }
}
