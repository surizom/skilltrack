package fr.skilltrack.time;

import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

@Service
public class TimeProvider {
  private final LocalDate beginningDay;

  public TimeProvider() {
    this.beginningDay = LocalDate.of(2020, 6, 15);
  }

  public static final ZoneId ZONE_ID = ZoneId.of("Europe/Paris");

  public Instant now() {
    return Instant.now();
  }

  public LocalDate today() {
    return LocalDate.now(ZONE_ID);
  }

  public LocalDate beginning() {
    return this.beginningDay;
  }

  public Integer numberOfDaysSinceBeginning() {
    return today().compareTo(this.beginningDay);
  }

  public Integer numberOfDaysSinceBeginning(LocalDate date) {
    return date.compareTo(beginning());
  }
}
