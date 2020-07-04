package fr.skilltrack;

import fr.skilltrack.entities.SkillEvaluation;
import fr.skilltrack.time.TimeProvider;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class SkillEvaluationService {

    private List<SkillEvaluation> skillEvaluations = new ArrayList<>();

    public List<SkillEvaluation> getSkillEvaluations() {
        return skillEvaluations;
    }

    public List<SkillEvaluation> getSkillEvaluations(int skillId) {
        return skillEvaluations.stream().filter(skillEvaluation -> skillEvaluation.getSkillId() == skillId).collect(Collectors.toList());
    }

    public SkillEvaluation evaluateSkill(int skillId, int level) {
        SkillEvaluation skillEvaluation = new SkillEvaluation();
        skillEvaluation.setLevel(level);
        skillEvaluation.setSkillId(skillId);
        skillEvaluation.setTimestamp(TimeProvider.now().getEpochSecond());
        return skillEvaluation;
    }
}
