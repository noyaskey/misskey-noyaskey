<template>
	<div class="_gaps_m">
		<FormInfo warn class="_formBlock">以下の機能は独自機能であり、ベータ版です。重大なバグが潜んでいる可能性があります。</FormInfo>

		<MkSwitch v-if="showStarAndFavoriteIntegrationButton != true" v-model="showStarButton" class="_formBlock">★ボタンを表示する(from Calckey)
			<template #caption>このオプションを有効にすると、擬似的にTwitterのふぁぼのような事ができます。(from Calckey)</template>
		</MkSwitch>
		<MkSwitch v-if="showStarAndFavoriteIntegrationButton != true" v-model="showFavoriteButton" class="_formBlock">お気に入りボタンを表示する
			<template #caption>このオプションを有効にすると、ワンアクションでお気に入りの追加/解除ができます。</template>
		</MkSwitch>
		<MkSwitch v-if="showFavoriteButton != true && showStarButton != true" v-model="showStarAndFavoriteIntegrationButton" class="_formBlock">★ボタンとお気に入りボタンの機能を統合する
			<template #caption>このオプションを有効にすると、Twitterのふぁぼと同じような挙動になります。</template>
		</MkSwitch>
		<MkSwitch v-model="nicknameEnabled">ニックネーム機能を有効にする(from えびすきー)
			<template #caption>ユーザーの名前を任意に変更できるようになります。変更は自分にのみ反映されます。</template>
		</MkSwitch>
		<MkSwitch v-model="numberQuoteEnabled">数字引用ボタンを表示する(from えびすきー)
			<template #caption>数字引用及びパクるボタンを表示させます。</template>
		</MkSwitch>
	</div>
</template>

<script lang="ts" setup>
import { computed, watch } from 'vue';
import { defaultStore } from '@/store';
import * as os from '@/os';
import { unisonReload } from '@/scripts/unison-reload';
import { i18n } from '@/i18n';
import FormInfo from '@/components/MkInfo.vue';
import MkSwitch from '@/components/MkSwitch.vue';

async function reloadAsk() {
	const { canceled } = await os.confirm({
		type: 'info',
		text: i18n.ts.reloadToApplySetting,
	});
	if (canceled) return;

	unisonReload();
}

const nicknameEnabled = computed(defaultStore.makeGetterSetter('nicknameEnabled'));
const numberQuoteEnabled = computed(defaultStore.makeGetterSetter('numberQuoteEnabled'))
const showStarButton = computed(defaultStore.makeGetterSetter('showStarButton'));
const showFavoriteButton = computed(defaultStore.makeGetterSetter('showFavoriteButton'));
const showStarAndFavoriteIntegrationButton = computed(defaultStore.makeGetterSetter('showStarAndFavoriteIntegrationButton'));

watch([
	numberQuoteEnabled,
	nicknameEnabled,
	showStarButton,
	showFavoriteButton,
	showStarAndFavoriteIntegrationButton,
], async () => {
	await reloadAsk();
});
</script>
