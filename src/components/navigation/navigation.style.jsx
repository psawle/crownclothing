// .navigation-container {
//   display: flex;
//   justify-content: space-between;

//   .nav-logo {
//     height: 100%;
//     width: 70px;
//     padding: 25px;
//   }

//   .logi{
//     text-decoration: none;
//   }

//   .nav-item-container {
//     width: 50%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;
//     list-style: none;

//     .nav-items {
//       padding: 10px 15px;
//       cursor: pointer;
//     }
//   }
// }

// // //////////////////////////////////////////////////////////////////////////////////////////
// // ///
// // ///
// // .navigation {
// //     height: 70px;
// //     width: 100%;
// //     display: flex;
// //     justify-content: space-between;
// //     margin-bottom: 25px;

// //     .logo-container {
// //       height: 100%;
// //       width: 70px;
// //       padding: 25px;
// //     }

// //     .nav-links-container {
// //       width: 50%;
// //       height: 100%;
// //       display: flex;
// //       align-items: center;
// //       justify-content: flex-end;

// //       .nav-link {
// //         padding: 10px 15px;
// //         cursor: pointer;
// //       }
// //     }
// //   }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////s

import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LinkContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  
`;

export const NavItemContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  padding: 15px;
  align-items: center;
  justify-content: flex-end;
`;

export const NavItems = styled(Link)`
  padding: 10px 15px ;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;
