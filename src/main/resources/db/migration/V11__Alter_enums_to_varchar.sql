ALTER TABLE `vecnamoda`.`article`
    CHANGE COLUMN `condition` `condition` VARCHAR(50) NOT NULL,
    CHANGE COLUMN `status` `status` VARCHAR(50) NOT NULL;

ALTER TABLE `vecnamoda`.`order`
    CHANGE COLUMN `status` `status` VARCHAR(50) NOT NULL;

ALTER TABLE `vecnamoda`.`user`
    CHANGE COLUMN `role` `role` VARCHAR(50) NOT NULL,
    CHANGE COLUMN `status` `status` VARCHAR(50) NOT NULL;
