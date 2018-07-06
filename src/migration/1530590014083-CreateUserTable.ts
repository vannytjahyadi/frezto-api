import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateUserTable1530590014083 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "bigint",
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isPrimary: true,
                },
                {
                    name: "username",
                    type: "varchar",
                    length: "150",
                    isUnique: true,
                    isNullable: true
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "200",
                    isUnique: true,
                    isNullable: true
                },
                {
                    name: "password",
                    type: "varchar",
                    length: "250",
                    isNullable: true
                },
                {
                    name: "first_name",
                    type: "varchar",
                    length: "200",
                    isNullable: true
                },
                {
                    name: "last_name",
                    type: "varchar",
                    length: "100",
                    isNullable: true
                },
                {
                    name: "country_code",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "phone_number",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "created_at",
                    type: "datetime",
                    isNullable: true
                },
                {
                    name: "updated_at",
                    type: "datetime",
                    isNullable: true
                },
                {
                    name: "is_deleted",
                    type: "boolean",
                    default: false,
                },
            ]
        }), true);   

        await queryRunner.createTable(new Table({
            name: "user_token",
            columns: [
                {
                    name: "id",
                    type: "bigint",
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isPrimary: true,
                },
                {
                    name: "user_id",
                    type: "bigint",
                },
                {
                    name: "otp_code",
                    type: "mediumint",
                    unsigned: true
                },
                {
                    name: "expired_at",
                    type: "datetime",
                    isNullable: false
                },
                {
                    name: "created_at",
                    type: "datetime",
                    isNullable: true
                },
                {
                    name: "updated_at",
                    type: "datetime",
                    isNullable: true
                },
            ]
        }), true);

        await queryRunner.createForeignKey("user_token", new TableForeignKey({
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onUpdate: "CASCADE",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {

        const table = await queryRunner.getTable("user_token");
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("user_id") !== -1)
        await queryRunner.dropForeignKey("user_token", foreignKey);

        await queryRunner.dropTable("user_token", true);
        await queryRunner.dropTable("user", true);
    }

}
