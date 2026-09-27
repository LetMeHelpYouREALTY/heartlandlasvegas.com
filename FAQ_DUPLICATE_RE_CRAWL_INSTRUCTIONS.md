# FAQ Duplicate Field - Re-crawl Instructions

## ⚠️ Current Status

**Google Last Crawled:** Jan 15, 2026  
**Fix Deployed:** After Jan 15, 2026  
**Validation Started:** Jan 19, 2026

**Issue:** Google is validating based on the **old cached version** from before the fix was deployed.

---

## ✅ Code Verification

The code is **correct** - there is only ONE FAQPage schema on the FAQ page:

```typescript
// app/faq/page.tsx - Only ONE FAQPage schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allQuestions.map(...) // All 15+ questions
};
```

**Verified:**
- ✅ FAQ page has only ONE FAQPage schema
- ✅ Layout does NOT have FAQPage in @graph
- ✅ No components adding duplicate FAQPage
- ✅ Code is clean and correct

---

## 🔄 Required Action: Request Re-crawl

Google needs to **re-crawl the page** to see the fix. Here's how:

### Method 1: URL Inspection Tool (Recommended)

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **URL Inspection** (top search bar)
3. Enter: `https://www.homesteadwestlasvegas.com/faq`
4. Click **Request Indexing**
5. Wait for status to show "URL is on Google"

### Method 2: Validate Fix Button

1. Go to **Enhancements** → **FAQ**
2. Find the error for `/faq` page
3. Click **Validate Fix** button
4. Google will re-crawl and verify

### Method 3: Submit Updated Sitemap

1. Go to **Sitemaps** in Search Console
2. Click **Resubmit** on your sitemap
3. This triggers re-crawl of all pages

---

## ⏱️ Timeline After Requesting Re-crawl

- **Immediate:** Request submitted
- **1-3 days:** Google re-crawls the FAQ page
- **3-7 days:** Validation updates, error should clear
- **Up to 2 weeks:** Full propagation across Google's index

---

## ✅ Verification Steps

After requesting re-crawl, verify:

### 1. Test with Rich Results Test
- URL: https://search.google.com/test/rich-results
- Test: `https://www.homesteadwestlasvegas.com/faq`
- Should show: **ONE** FAQPage schema (not two)

### 2. Check Page Source
- View page source of `/faq`
- Search for `"@type": "FAQPage"`
- Should find: **Only ONE** occurrence

### 3. Monitor Search Console
- Check **Enhancements** → **FAQ**
- Error should clear after re-crawl completes

---

## 🎯 Why This Happens

Google Search Console shows errors based on the **last crawled version** of your page. Since Google last crawled on Jan 15, 2026 (before the fix), it's still seeing the old version with duplicates.

**The fix is correct** - we just need Google to re-crawl to see it.

---

## 📋 Summary

- ✅ **Code is correct** - Only one FAQPage on FAQ page
- ✅ **Fix is deployed** - Changes are live
- ⏳ **Waiting for re-crawl** - Google needs to see updated page
- 🔄 **Action needed** - Request indexing in Search Console

**The duplicate error will automatically clear once Google re-crawls the page and sees the fix.**

---

## 🔗 Related Files

- `app/faq/page.tsx` - FAQPage schema (single, correct)
- `app/layout.tsx` - @graph (no FAQPage, correct)
- `app/page.tsx` - Homepage FAQPage (different page, OK)
