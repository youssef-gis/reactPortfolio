import React from "react";
import Modal from "../components/Modal";
import { primaryColors, backgroundColors } from "./data";
import ThemeColor from "./Theme_color";
import BackgroundColor from './Background_color';
import './theme.css'
const Theme = () => {
  return (
    <Modal className="theme__container" >
        <h4>Customize your theme</h4>
        <small>
          Change the primary color and the background to your preference
        </small>
        <div className="theme__primary__color">
            <h5>Primary Colors</h5>
            <div className="theme_colors">
                    {primaryColors.map((primcolor) => (
                    <ThemeColor
                    key={primcolor.className}
                    className={primcolor.className}
                    />
                ))}
            </div>
        </div>
        <div className="theme__background__color">
            <h5>Background Colors</h5>
            <div className="background_colors">
                    {backgroundColors.map((backcolor) => (
                    <BackgroundColor key={backcolor.className} className={backcolor.className} />
                ))}
            </div>
        </div>
    </Modal>
  );
};

export default Theme;
