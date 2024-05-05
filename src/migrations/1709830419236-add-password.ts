import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPassword1709830419236 implements MigrationInterface {
    name = 'AddPassword1709830419236'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
    }

}
