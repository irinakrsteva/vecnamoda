CREATE TABLE `vecnamoda`.`category` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `parent_category_id` INT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_parent_category_category`
    FOREIGN KEY (`parent_category_id`)
    REFERENCES `vecnamoda`.`category` (`id`)
);

ALTER TABLE `vecnamoda`.`article`
  ADD `category_id` INT NULL
;

ALTER TABLE `vecnamoda`.`article`
  ADD CONSTRAINT `fk_category_article`
    FOREIGN KEY (`category_id`)
    REFERENCES `vecnamoda`.`category` (`id`)
;