package fr.skilltrack.entities;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

@Data
@EqualsAndHashCode
public class SkillEvaluation implements Serializable{
    private static final long serialVersionUID = 1L;

    private int skillId;

    private long timestamp;

    private int level;
}
