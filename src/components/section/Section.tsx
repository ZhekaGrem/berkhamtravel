import styles from "./section.module.css";


interface SectionType {
  id?: string;
  className?: string;
  children: React.ReactNode;
}


function Section({ id, className, children, ...props }: SectionType) {
  return (
    <section id={id} className={`${styles.container} ${className}`} {...props}>{children}</section>
  )
}

export default Section