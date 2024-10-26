import { routes } from "./TS/constants/constants";
import { ISectionsAttributes } from "./TS/interfaces/interfaces";

const sections: ISectionsAttributes[] = [
  {
    id: "multitab",
    name: "Multiplication table",
    motto: "learn multiplication using addition and subtraction",
    link: routes.multiplicationTab,
    className: "",
  },
  {
    id: "arithmetic",
    name: "Arithmetic operations",
    motto: "boost your skills of basic arithmetical operations",
    link: routes.arithmetic,
    className: "",
  },
  {
    id: "fractions",
    name: "Fractions",
    motto: "boost your skills of operations with fractions",
    link: routes.fractions,
    className: "",
  },
];

export default sections;
