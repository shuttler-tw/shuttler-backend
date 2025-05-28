/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
const defaultActivities = [
  {
    name: '歡樂團',
    organizer: '小明羽球社',
    start_time: new Date('2025-03-22T09:00:00Z'),
    end_time: new Date('2025-03-22T12:00:00Z'),
    venue_name: '中壢三芝小鹿羽球館',
    zip_code: 320,
    address: '三芝路280號',
    ball_type: '黑摩亞/No.1',
    participant_count: 24,
    booked_count: 5,
    rental_lot: 3,
    brief: '6人開團',
    contact_name: '阿不拉',
    contact_phone: '0911582136',
    contact_line: '0911582136',
    points: 200,
    status: 'published',
  },
  {
    name: '晨練羽球會',
    organizer: '小美羽球社',
    start_time: new Date('2025-03-23T06:30:00Z'),
    end_time: new Date('2025-03-23T08:30:00Z'),
    venue_name: '桃園市立體育館',
    zip_code: 330,
    address: '中正路100號',
    ball_type: 'RSL No.5',
    participant_count: 20,
    booked_count: 8,
    rental_lot: 2,
    brief: '早起打球精神好',
    contact_name: '小楊',
    contact_phone: '0923123456',
    contact_line: 'xiaoyang',
    points: 150,
    status: 'published',
  },
  {
    name: '週末大亂鬥',
    organizer: '阿明羽球社',
    start_time: new Date('2025-03-29T14:00:00Z'),
    end_time: new Date('2025-03-29T17:00:00Z'),
    venue_name: '台北南港羽球館',
    zip_code: 115,
    address: '南港路三段50號',
    ball_type: '威克多金黃2號',
    participant_count: 30,
    booked_count: 10,
    rental_lot: 4,
    brief: '高手過招，快來挑戰',
    contact_name: '老王',
    contact_phone: '0988777666',
    contact_line: 'laowang88',
    points: 300,
    status: 'published',
  },
  {
    name: '輕鬆下午打',
    organizer: '小志同好會',
    start_time: new Date('2025-04-01T13:00:00Z'),
    end_time: new Date('2025-04-01T15:00:00Z'),
    venue_name: '林口體育館',
    zip_code: 244,
    address: '文化一路二段188號',
    ball_type: '勝利Master Ace',
    participant_count: 16,
    booked_count: 6,
    rental_lot: 2,
    brief: '適合初學者',
    contact_name: '小美',
    contact_phone: '0977123456',
    contact_line: 'meimei',
    points: 120,
    status: 'published',
  },
  {
    name: '夜貓子羽球團',
    organizer: '不睡覺俱樂部',
    start_time: new Date('2025-04-05T21:00:00Z'),
    end_time: new Date('2025-04-05T23:30:00Z'),
    venue_name: '台中大都會羽球中心',
    zip_code: 407,
    address: '台灣大道四段999號',
    ball_type: 'Yonex AS-30',
    participant_count: 20,
    booked_count: 12,
    rental_lot: 3,
    brief: '夜深人靜來開打',
    contact_name: '阿明',
    contact_phone: '0933123123',
    contact_line: 'aming',
    points: 180,
    status: 'published',
  },
  {
    name: '新手教學團',
    organizer: '羽球新手村',
    start_time: new Date('2025-04-10T10:00:00Z'),
    end_time: new Date('2025-04-10T12:00:00Z'),
    venue_name: '新竹縣立羽球館',
    zip_code: 302,
    address: '中山路88號',
    ball_type: 'No.1',
    participant_count: 12,
    booked_count: 4,
    rental_lot: 2,
    brief: '教學導向活動',
    contact_name: '阿志',
    contact_phone: '0955111222',
    contact_line: 'azhi88',
    points: 100,
    status: 'published',
  },
  {
    name: '假日親子場',
    organizer: '親子羽球樂園',
    start_time: new Date('2025-04-13T15:00:00Z'),
    end_time: new Date('2025-04-13T17:00:00Z'),
    venue_name: '永和羽球館',
    zip_code: 234,
    address: '永和路一段20號',
    ball_type: '勝利No.1',
    participant_count: 18,
    booked_count: 7,
    rental_lot: 3,
    brief: '歡迎親子參加',
    contact_name: '小芳',
    contact_phone: '0966333444',
    contact_line: 'xiaofang',
    points: 140,
    status: 'published',
  },
  {
    name: '學生特惠團',
    organizer: '師大羽球社',
    start_time: new Date('2025-04-15T18:00:00Z'),
    end_time: new Date('2025-04-15T20:00:00Z'),
    venue_name: '師大體育館',
    zip_code: 106,
    address: '和平東路一段1號',
    ball_type: '羽球博士1號',
    participant_count: 25,
    booked_count: 14,
    rental_lot: 4,
    brief: '學生憑證報名享折扣',
    contact_name: '小正',
    contact_phone: '0944555666',
    contact_line: 'zheng',
    points: 160,
    status: 'published',
  },
  {
    name: '女子限定羽球團',
    organizer: '女子羽球聯盟',
    start_time: new Date('2025-04-20T09:00:00Z'),
    end_time: new Date('2025-04-20T11:00:00Z'),
    venue_name: '士林運動中心',
    zip_code: 111,
    address: '福港街45號',
    ball_type: 'RSL Classic Tourney',
    participant_count: 15,
    booked_count: 5,
    rental_lot: 2,
    brief: '女生限定活動',
    contact_name: '小芸',
    contact_phone: '0911888999',
    contact_line: 'xiao_yun',
    points: 130,
    status: 'published',
  },
  {
    name: '中午快打團',
    organizer: '午休羽球社',
    start_time: new Date('2025-04-22T12:00:00Z'),
    end_time: new Date('2025-04-22T13:30:00Z'),
    venue_name: '新店羽球會館',
    zip_code: 231,
    address: '北新路三段500號',
    ball_type: '勝利1號',
    participant_count: 10,
    booked_count: 6,
    rental_lot: 2,
    brief: '午休運動組',
    contact_name: '阿宏',
    contact_phone: '0933444555',
    contact_line: 'ahong',
    points: 110,
    status: 'published',
  },
];

module.exports = class ActivitiesSeeding1748420727345 {
  constructor() {
    this.name = 'ActivitiesSeeding1748420727345';
  }

  async up(queryRunner) {
    const activitiesRepo = queryRunner.manager.getRepository('Activities');

    // insert default activities
    const membersRepo = queryRunner.manager.getRepository('Members');
    const members = await membersRepo.find({});
    for (const [index, activity] of defaultActivities.entries()) {
      const member = members[index % members.length];
      const activityData = {
        ...activity,
        member_id: member.id, // Assign member_id from the members found
      };
      await activitiesRepo.save(activityData);
    }

    // insert default activity levels
    const activityLevelsRepo = queryRunner.manager.getRepository('ActivityLevels');
    const levelsRepo = queryRunner.manager.getRepository('Levels');
    const activities = await activitiesRepo.find();
    const levels = await levelsRepo.find();

    const defaultActivityLevels = [
      {
        activity_id: activities[0].id,
        level_id: levels[0].id,
      },
      {
        activity_id: activities[0].id,
        level_id: levels[3].id,
      },
      {
        activity_id: activities[1].id,
        level_id: levels[2].id,
      },
      {
        activity_id: activities[2].id,
        level_id: levels[4].id,
      },
      {
        activity_id: activities[2].id,
        level_id: levels[5].id,
      },
      {
        activity_id: activities[3].id,
        level_id: levels[0].id,
      },
      {
        activity_id: activities[4].id,
        level_id: levels[2].id,
      },
      {
        activity_id: activities[5].id,
        level_id: levels[0].id,
      },
      {
        activity_id: activities[6].id,
        level_id: levels[0].id,
      },
      {
        activity_id: activities[7].id,
        level_id: levels[0].id,
      },
      {
        activity_id: activities[7].id,
        level_id: levels[1].id,
      },
      {
        activity_id: activities[8].id,
        level_id: levels[1].id,
      },
      {
        activity_id: activities[8].id,
        level_id: levels[2].id,
      },
      {
        activity_id: activities[9].id,
        level_id: levels[2].id,
      },
      {
        activity_id: activities[9].id,
        level_id: levels[3].id,
      },
    ];
    for (const activityLevel of defaultActivityLevels) {
      const exists = await activityLevelsRepo.findOneBy({
        activity_id: activityLevel.activity_id,
        level_id: activityLevel.level_id,
      });
      if (!exists) {
        await activityLevelsRepo.save(activityLevel);
      }
    }

    // insert default activity facilities
    const activityFacilitiesRepo = queryRunner.manager.getRepository('ActivityFacilities');
    const facilitiesRepo = queryRunner.manager.getRepository('Facilities');
    const facilities = await facilitiesRepo.find();
    const defaultActivityFacilities = [
      {
        activity_id: activities[0].id,
        facility_id: facilities[0].id,
      },
      {
        activity_id: activities[0].id,
        facility_id: facilities[4].id,
      },
      {
        activity_id: activities[0].id,
        facility_id: facilities[7].id,
      },
      {
        activity_id: activities[1].id,
        facility_id: facilities[0].id,
      },
      {
        activity_id: activities[1].id,
        facility_id: facilities[1].id,
      },
      {
        activity_id: activities[1].id,
        facility_id: facilities[2].id,
      },
      {
        activity_id: activities[1].id,
        facility_id: facilities[7].id,
      },
      {
        activity_id: activities[2].id,
        facility_id: facilities[0].id,
      },
      {
        activity_id: activities[2].id,
        facility_id: facilities[1].id,
      },
      {
        activity_id: activities[2].id,
        facility_id: facilities[2].id,
      },
      {
        activity_id: activities[2].id,
        facility_id: facilities[7].id,
      },
      {
        activity_id: activities[3].id,
        facility_id: facilities[1].id,
      },
      {
        activity_id: activities[3].id,
        facility_id: facilities[2].id,
      },
      {
        activity_id: activities[3].id,
        facility_id: facilities[7].id,
      },
      {
        activity_id: activities[4].id,
        facility_id: facilities[0].id,
      },
      {
        activity_id: activities[4].id,
        facility_id: facilities[1].id,
      },
      {
        activity_id: activities[4].id,
        facility_id: facilities[2].id,
      },
      {
        activity_id: activities[4].id,
        facility_id: facilities[5].id,
      },
      {
        activity_id: activities[5].id,
        facility_id: facilities[0].id,
      },
      {
        activity_id: activities[5].id,
        facility_id: facilities[1].id,
      },
      {
        activity_id: activities[5].id,
        facility_id: facilities[2].id,
      },
      {
        activity_id: activities[5].id,
        facility_id: facilities[7].id,
      },
      {
        activity_id: activities[6].id,
        facility_id: facilities[0].id,
      },
      {
        activity_id: activities[6].id,
        facility_id: facilities[1].id,
      },
      {
        activity_id: activities[6].id,
        facility_id: facilities[2].id,
      },
      {
        activity_id: activities[6].id,
        facility_id: facilities[3].id,
      },
      {
        activity_id: activities[7].id,
        facility_id: facilities[0].id,
      },
      {
        activity_id: activities[7].id,
        facility_id: facilities[1].id,
      },
      {
        activity_id: activities[7].id,
        facility_id: facilities[2].id,
      },
      {
        activity_id: activities[7].id,
        facility_id: facilities[4].id,
      },
      {
        activity_id: activities[7].id,
        facility_id: facilities[5].id,
      },
      {
        activity_id: activities[7].id,
        facility_id: facilities[6].id,
      },
      {
        activity_id: activities[7].id,
        facility_id: facilities[7].id,
      },
      {
        activity_id: activities[8].id,
        facility_id: facilities[1].id,
      },
      {
        activity_id: activities[8].id,
        facility_id: facilities[2].id,
      },
      {
        activity_id: activities[9].id,
        facility_id: facilities[0].id,
      },
      {
        activity_id: activities[9].id,
        facility_id: facilities[1].id,
      },
      {
        activity_id: activities[9].id,
        facility_id: facilities[2].id,
      },
    ];
    for (const activityFacility of defaultActivityFacilities) {
      const exists = await activityFacilitiesRepo.findOneBy({
        activity_id: activityFacility.activity_id,
        facility_id: activityFacility.facility_id,
      });
      if (!exists) {
        await activityFacilitiesRepo.save(activityFacility);
      }
    }

    // insert default activity pictures
    const activityPicturesRepo = queryRunner.manager.getRepository('ActivityPictures');
    const defaultActivityPictures = [
      {
        activity_id: activities[0].id,
        url: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        sort_order: 1,
      },
      {
        activity_id: activities[0].id,
        url: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        sort_order: 2,
      },
      {
        activity_id: activities[0].id,
        url: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        sort_order: 3,
      },
      {
        activity_id: activities[0].id,
        url: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        sort_order: 4,
      },
      {
        activity_id: activities[0].id,
        url: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        sort_order: 5,
      },
      {
        activity_id: activities[1].id,
        url: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        sort_order: 1,
      },
      {
        activity_id: activities[1].id,
        url: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        sort_order: 2,
      },
      {
        activity_id: activities[2].id,
        url: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        sort_order: 1,
      },
      {
        activity_id: activities[3].id,
        url: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        sort_order: 1,
      },
      {
        activity_id: activities[4].id,
        url: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        sort_order: 1,
      },
      {
        activity_id: activities[4].id,
        url: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        sort_order: 2,
      },
      {
        activity_id: activities[4].id,
        url: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        sort_order: 3,
      },
      {
        activity_id: activities[5].id,
        url: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        sort_order: 1,
      },
      {
        activity_id: activities[6].id,
        url: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        sort_order: 1,
      },
      {
        activity_id: activities[6].id,
        url: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        sort_order: 2,
      },
      {
        activity_id: activities[7].id,
        url: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        sort_order: 1,
      },
      {
        activity_id: activities[7].id,
        url: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        sort_order: 2,
      },
      {
        activity_id: activities[7].id,
        url: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        sort_order: 3,
      },
      {
        activity_id: activities[7].id,
        url: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        sort_order: 4,
      },
      {
        activity_id: activities[8].id,
        url: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        sort_order: 1,
      },
      {
        activity_id: activities[9].id,
        url: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        sort_order: 1,
      },
      {
        activity_id: activities[9].id,
        url: 'https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        sort_order: 2,
      },
    ];
    for (const activityPicture of defaultActivityPictures) {
      await activityPicturesRepo.save(activityPicture);
    }
  }

  async down(queryRunner) {
    await queryRunner.manager.createQueryBuilder().delete().from('ActivityPictures').execute();
    await queryRunner.manager.createQueryBuilder().delete().from('ActivityLevels').execute();
    await queryRunner.manager.createQueryBuilder().delete().from('ActivityFacilities').execute();
    await queryRunner.manager.createQueryBuilder().delete().from('Activities').execute();
  }
};
