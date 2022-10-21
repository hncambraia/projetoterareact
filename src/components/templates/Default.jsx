import React from "react";

import AppHeader from "../organisms/AppHeader";

//import DrawerMenu from "../molecules/DrawerMenu";

export default function Default(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="wrapper">
      <AppHeader setOpen={setOpen} />
      {props.children}
    </div>
  );
}
