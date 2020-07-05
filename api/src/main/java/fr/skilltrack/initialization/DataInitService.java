package fr.skilltrack.initialization;

import fr.skilltrack.SkillService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

@Service
@Profile("init")
public class DataInitService {

  private static final Logger LOG = LoggerFactory.getLogger(DataInitService.class);

  public DataInitService(SkillService skillService) {
    LOG.warn("Data initialization in progress");

    skillService.createSkill("CSS", 4);
    skillService.createSkill("React", 4);
    skillService.createSkill("JavaScript", 2);
    skillService.createSkill("Java", 5);
    skillService.createSkill("Spring", 6);
    skillService.createSkill("GraphQL", 8);

    skillService.evaluateSkill(1, 1);
    skillService.evaluateSkill(2, 3);
    skillService.evaluateSkill(3, 3);
    skillService.evaluateSkill(4, 5);
    skillService.evaluateSkill(5, 5);
    skillService.evaluateSkill(6, 1);
    skillService.evaluateSkill(1, 2);

    LOG.info("Data initialization successful");
  }
}
