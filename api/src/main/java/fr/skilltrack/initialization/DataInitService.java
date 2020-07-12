package fr.skilltrack.initialization;

import fr.skilltrack.SkillService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import static fr.skilltrack.entities.SkillImportance.*;

@Service
@Profile("init")
public class DataInitService {

  private static final Logger LOG = LoggerFactory.getLogger(DataInitService.class);

  public DataInitService(SkillService skillService) {
    LOG.warn("Data initialization in progress");

    skillService.createSkill("CSS", Important, "https://developer.mozilla.org/en-US/docs/Web/CSS");
    skillService.createSkill(
        "Je sais écrire du HTML dans un composant avec JSX (ou TSX)",
        Vital,
        "https://reactjs.org/docs/introducing-jsx.html");
    skillService.createSkill(
        "Je sais destructurer des variables, des objets, des tableaux",
        Vital,
        "https://javascript.info/destructuring-assignment");
    skillService.createSkill(
        "Je sais typer les clés d'un objet en typescript",
        Important,
        "https://www.typescriptlang.org/docs/handbook/advanced-types.html#index-types-and-index-signatures");
    skillService.createSkill("Java", Important, null);
    skillService.createSkill("Spring", Good_to_know, null);
    skillService.createSkill("GraphQL", Optional, "https://graphql.org/");

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
