ALTER TABLE `vecnamoda`.`address`
    DROP FOREIGN KEY `fk_address_user`;
ALTER TABLE `vecnamoda`.`address`
    CHANGE COLUMN `user_id` `user_id` BIGINT NULL ;
ALTER TABLE `vecnamoda`.`address`
    ADD CONSTRAINT `fk_address_user`
        FOREIGN KEY (`user_id`)
            REFERENCES `vecnamoda`.`user` (`id`);
