
ALTER TABLE `vecnamoda`.`consignment`
ADD COLUMN `token` VARCHAR(128) NULL AFTER `user_id`,
ADD UNIQUE INDEX `token_UNIQUE` (`token` ASC) VISIBLE;
;
