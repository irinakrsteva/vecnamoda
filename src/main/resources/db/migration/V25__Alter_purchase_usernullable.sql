ALTER TABLE `vecnamoda`.`purchase`
    DROP FOREIGN KEY `fk_order_user`;
ALTER TABLE `vecnamoda`.`purchase`
    CHANGE COLUMN `user_id` `user_id` BIGINT NULL ;
ALTER TABLE `vecnamoda`.`purchase`
    ADD CONSTRAINT `fk_order_user`
        FOREIGN KEY (`user_id`)
            REFERENCES `vecnamoda`.`user` (`id`);
