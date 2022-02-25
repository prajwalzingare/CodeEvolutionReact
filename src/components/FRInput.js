import React from "react";

// function FRInput() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   );
// }

const FRInput = React.forwardRef(() => {
  return (
    <div>
      <input type="text" />
    </div>
  );
});
export default FRInput();
