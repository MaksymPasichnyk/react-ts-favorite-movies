import styles from "./Logo.module.scss";

interface Props {
  title: string;
}

const Logo = ({ title }: Props) => {
  return (
    <div className={styles.logo}>
      <h3>{title}</h3>
    </div>
  );
};

export default Logo;
