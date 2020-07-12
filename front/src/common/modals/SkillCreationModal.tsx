import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  createStyles,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Theme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import type { Skill } from '../../generated/graphql';
import { SkillImportance } from '../../generated/graphql';
import { formatEnum } from '../util/utils';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const SkillCreationModal: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  const [skillToCreate, setSkillToCreate] = React.useState<Partial<Skill>>({});

  const setImportance = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSkillToCreate({
      ...skillToCreate,
      importance: event.target.value as SkillImportance,
    });
  };

  const setName = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSkillToCreate({ ...skillToCreate, name: event.target.value as string });
  };

  console.log(skillToCreate);

  return (
    <div>
      <Dialog
        open={props.isOpen}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create a skill</DialogTitle>
        <DialogContent>
          <FormGroup>
            <FormControl className={classes.formControl}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Skill Name"
                type="text"
                fullWidth
                onChange={setName}
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="importance-select-label">Importance</InputLabel>
              <Select
                labelId="importance-select-label"
                id="importance-simple-select"
                onChange={setImportance}
              >
                {Object.keys(SkillImportance).map((importance) => (
                  <MenuItem value={importance} key={importance}>
                    {formatEnum(importance)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.handleClose} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SkillCreationModal;
