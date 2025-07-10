import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";
import work from "../../data/work.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {
                    skills.map((skills, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skills.imageSrc)} alt={skills.title}/>
                                </div>
                                <p>{skills.title}</p>
                            </div>
                        );
                    })
                }
            </div>
            <ul className={styles.work}>
                {
                    work.map((workItem, id) => {
                        return  (
                            <li key={id} className={styles.workItem}>
                                <img src={
                                    getImageUrl(workItem.imageSrc)}
                                    alt={`${workItem.organisation} Logo`
                                }/>
                                <div className={styles.workItemDetails}>
                                    <h3>
                                        {`${workItem.role}`}, {`${workItem.organisation}`}
                                    </h3>
                                    <p>
                                        {`${workItem.startDate}`} - {`${workItem.endDate}`}
                                    </p>
                                    <ul>
                                        {workItem.experiences.map((experience, id) => {
                                            return <li key={id}>{experience}</li>
                                        })}
                                    </ul>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    </section>
  );
};
