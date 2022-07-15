ALTER TABLE `vecnamoda`.`blob`
    ADD COLUMN `name` TINYTEXT NULL AFTER `data`,
    ADD COLUMN `type` VARCHAR(45) NULL AFTER `name`,
    ADD COLUMN `size` BIGINT NULL AFTER `type`;
