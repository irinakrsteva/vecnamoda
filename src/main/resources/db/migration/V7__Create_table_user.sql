CREATE TABLE `vecnamoda`.`user`
(
    `id`       BIGINT                                 NOT NULL,
    `name`     VARCHAR(20)                            NULL,
    `username` VARCHAR(50)                            NULL,
    `email`    VARCHAR(50)                            NOT NULL,
    `password` VARCHAR(50)                            NOT NULL,
    `role`     ENUM ('admin', 'employee', 'customer') NOT NULL,
    `status`   ENUM ('normal', 'banned')              NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `vecnamoda`.`address`
(
    `id`          BIGINT       NOT NULL,
    `address`     VARCHAR(300) NOT NULL,
    `city`        VARCHAR(100) NOT NULL,
    `country`     VARCHAR(100) NOT NULL,
    `postal_code` VARCHAR(100) NOT NULL,
    `user_id`     BIGINT       NOT NULL,
    PRIMARY KEY (`id`)
);

ALTER TABLE `vecnamoda`.`address`
    ADD CONSTRAINT `fk_address_user`
        FOREIGN KEY (`user_id`)
            REFERENCES `vecnamoda`.`user` (`id`)
;
