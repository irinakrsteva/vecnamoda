CREATE TABLE `vecnamoda`.`article`
(
    `id`          BIGINT                              NOT NULL,
    `price`       DECIMAL(16, 2)                      NOT NULL,
    `condition`   ENUM ('good', 'great', 'excellent') NULL,
    `status`      ENUM ('available', 'sold')          NOT NULL,
    `description` TINYTEXT                            NULL,
    PRIMARY KEY (`id`)
);
