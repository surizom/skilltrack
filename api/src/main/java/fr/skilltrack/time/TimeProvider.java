package fr.skilltrack.time;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

public class TimeProvider {
  public static final ZoneId ZONE_ID = ZoneId.of("Europe/Paris");

  public static Instant now() {
    return Instant.now();
  }

  public static LocalDate today() {
    return LocalDate.now(ZONE_ID);
  }
}
