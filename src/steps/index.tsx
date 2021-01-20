import React from 'react';
import classnames from 'classnames';
import { withStyles, ClassKeysOfStyles } from '@wonder-ui/styles';

import styles from './styles';

interface Props {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  current?: number;
  stepList?: string[];
}

const Steps = (props: Props) => {
  const { classes: s = {}, current = 0, stepList = [] } = props;

  return (
    <div className={s.root}>
      <div className={classnames(s.steps, s.stepsIcon)}>
        {stepList.map((item: string, index: number) => {
          return (
            <div
              className={classnames(
                s.step,
                { [s.stepLine as string]: index < stepList.length - 1 },
                { [s.stepActiveLine as string]: index < current },
              )}
              key={index}
            >
              <div
                className={classnames(
                  s.icon,
                  { [s.iconActive as string]: index <= current },
                  { [s.iconActiveOut as string]: index === current },
                )}
              />
            </div>
          );
        })}
      </div>
      <div className={s.steps}>
        {stepList.map((item: string, index: number) => (
          <div
            className={classnames(
              s.step,
              { [s.stepActive as string]: index <= current },
              { [s.bold as string]: index === current },
            )}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(Steps);
