import { CanDeactivateFn } from '@angular/router';

export const quitterFormGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  let valeurSubmitted = component['isSubmitted'];
  if (valeurSubmitted) return true;
  else {
    if (
      confirm(
        `Vous n'avez pas soumis le formulaire... Etes-vous sûr de vouloir quitter ?`
      )
    )
      return true;
    return false;
  }
};
