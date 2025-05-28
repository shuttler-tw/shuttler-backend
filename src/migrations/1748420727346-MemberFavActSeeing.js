/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class MemberFavActSeeing1748420727346 {
  constructor() {
    this.name = 'MemberFavActSeeing1748420727346';
  }

  async up(queryRunner) {
    const memberFavActRepo = queryRunner.manager.getRepository('MemberFavoriteActivities');
    const membersRepo = queryRunner.manager.getRepository('Members');
    const activitiesRepo = queryRunner.manager.getRepository('Activities');

    const members = await membersRepo.find();
    const activities = await activitiesRepo.find();

    const defaultMemberFavoriteActivities = [
      {
        member_id: members[0].id,
        activity_id: activities[0].id,
      },
      {
        member_id: members[0].id,
        activity_id: activities[1].id,
      },
      {
        member_id: members[0].id,
        activity_id: activities[2].id,
      },
      {
        member_id: members[0].id,
        activity_id: activities[6].id,
      },
      {
        member_id: members[1].id,
        activity_id: activities[4].id,
      },
      {
        member_id: members[1].id,
        activity_id: activities[8].id,
      },
    ];

    for (const memberFavoriteActivity of defaultMemberFavoriteActivities) {
      const exists = await memberFavActRepo.findOneBy({
        member_id: memberFavoriteActivity.member_id,
        activity_id: memberFavoriteActivity.activity_id,
      });
      if (!exists) {
        await memberFavActRepo.save(memberFavoriteActivity);
      }
    }
  }

  async down(queryRunner) {
    await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from('MemberFavoriteActivities')
      .execute();
  }
};
