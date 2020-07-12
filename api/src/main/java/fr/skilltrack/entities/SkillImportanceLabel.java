package fr.skilltrack.entities;

public enum SkillImportanceLabel {
  Optional("1"),
  Good_to_know("2"),
  Important("3"),
  Vital("4");
  private final String importanceValue;

  public int importanceValue() {
    return Integer.parseInt(this.importanceValue);
  }

  private SkillImportanceLabel(String importanceValue) {
    this.importanceValue = importanceValue;
  }
}
