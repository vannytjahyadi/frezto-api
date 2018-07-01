import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTable1530268454317 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "bigint",
                    isPrimary: true,
                },
                {
                    name: "first_name",
                    type: "varchar",
                },
                {
                    name: "last_name",
                    type: "varchar",
                }
            ]
        }), true)     
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("user", true);
    }

}
