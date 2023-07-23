export class NotesCountVisibility1690078287796 {
    name = 'NotesCountVisibility1690078287796'

		async up(queryRunner) {
			await queryRunner.query(`CREATE TYPE "public"."user_profile_notesCountvisibility_enum" AS ENUM('public', 'followers', 'private')`);
			await queryRunner.query(`ALTER TABLE "user_profile" ADD "notesCountVisibility" "public"."user_profile_notesCountvisibility_enum" NOT NULL DEFAULT 'public'`);
	}
	async down(queryRunner) {
			await queryRunner.query(`ALTER TABLE "user_profile" DROP COLUMN "notesCountVisibility"`);
			await queryRunner.query(`DROP TYPE "public"."user_profile_notesCountvisibility_enum"`);
	}
}
