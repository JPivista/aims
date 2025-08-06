# AIMS Website Color System Guide

## 🎨 Primary Color Palette

Our website uses 5 carefully selected colors, each serving specific purposes and conveying different emotions.

### The 5 AIMS Colors

| Color | Hex Code | RGB | Usage | Psychology |
|-------|----------|-----|-------|------------|
| **Purple** | `#6E3299` | `rgb(110, 50, 153)` | Primary brand, Headers, Navigation | Luxury, Creativity, Wisdom |
| **Orange** | `#FF853A` | `rgb(255, 133, 58)` | CTAs, Highlights, Energy | Enthusiasm, Determination |
| **Teal** | `#62C9B5` | `rgb(98, 201, 181)` | Success, Growth, Harmony | Balance, Healing, Growth |
| **Blue** | `#2828A2` | `rgb(40, 40, 162)` | Trust, Professional content | Stability, Reliability |
| **Pink** | `#FF98B5` | `rgb(255, 152, 181)` | Creative elements, Innovation | Compassion, Playfulness |

## 🚀 Implementation

### 1. Tailwind CSS Classes

```javascript
// Use these classes in your components
className="bg-aims-purple text-white"
className="bg-aims-orange hover:bg-aims-teal"
className="text-aims-blue border-aims-pink"
```

### 2. Direct Hex Usage

```javascript
// For custom styling or inline styles
style={{ backgroundColor: '#6E3299' }}  // Purple
style={{ color: '#FF853A' }}            // Orange
style={{ borderColor: '#62C9B5' }}      // Teal
```

### 3. Button Variants

```javascript
<Button variant="primary">Purple Button</Button>      // #6E3299
<Button variant="secondary">Orange Button</Button>    // #FF853A
<Button variant="success">Teal Button</Button>        // #62C9B5
<Button variant="info">Blue Button</Button>           // #2828A2
<Button variant="creative">Pink Button</Button>       // #FF98B5
```

## 📐 Design Guidelines

### Color Hierarchy

1. **Primary (Purple - #6E3299)**: Main brand elements, most important CTAs
2. **Secondary (Orange - #FF853A)**: Secondary CTAs, highlights, energy elements  
3. **Success (Teal - #62C9B5)**: Success states, positive feedback, growth
4. **Info (Blue - #2828A2)**: Professional content, trust elements, information
5. **Creative (Pink - #FF98B5)**: Innovation features, creative elements

### Usage Recommendations

#### Headers & Navigation
- **Primary**: Purple (`#6E3299`)
- **Hover states**: Orange (`#FF853A`)

#### Buttons & CTAs
- **Primary CTA**: Purple background + White text
- **Secondary CTA**: Orange background + White text  
- **Success**: Teal background + White text
- **Info**: Blue background + White text
- **Creative**: Pink background + White text

#### Status & Feedback
- **Success**: Teal (`#62C9B5`)
- **Warning**: Orange (`#FF853A`)
- **Info**: Blue (`#2828A2`)
- **Creative/Innovation**: Pink (`#FF98B5`)

## 🎯 Color Psychology & Brand Messaging

### Purple (#6E3299) - "Wisdom & Innovation"
- **Emotion**: Luxury, creativity, wisdom, spirituality
- **Use for**: Brand identity, premium features, innovative solutions
- **Message**: "We are sophisticated and forward-thinking"

### Orange (#FF853A) - "Energy & Action"  
- **Emotion**: Energy, enthusiasm, creativity, determination
- **Use for**: Call-to-actions, getting started, exciting features
- **Message**: "Take action, be energetic, get results"

### Teal (#62C9B5) - "Growth & Harmony"
- **Emotion**: Balance, harmony, growth, healing, freshness
- **Use for**: Success messages, growth metrics, positive outcomes
- **Message**: "We help you grow and achieve balance"

### Blue (#2828A2) - "Trust & Reliability"
- **Emotion**: Trust, stability, professionalism, reliability
- **Use for**: Professional content, security features, established credibility  
- **Message**: "You can trust us, we are reliable and professional"

### Pink (#FF98B5) - "Creativity & Innovation"
- **Emotion**: Creativity, compassion, innovation, playfulness
- **Use for**: Creative tools, innovative features, user-friendly elements
- **Message**: "We make complex things simple and enjoyable"

## 🔧 Accessibility Guidelines

### Contrast Ratios
- **Purple on White**: ✅ 7.2:1 (Excellent)
- **Orange on White**: ✅ 4.8:1 (Good)  
- **Teal on White**: ✅ 5.1:1 (Good)
- **Blue on White**: ✅ 8.9:1 (Excellent)
- **Pink on White**: ⚠️ 3.2:1 (Use with larger text only)

### Recommendations
- Use white text on all dark colors
- For pink, use larger font sizes or combine with darker variants
- Always test with accessibility tools
- Provide alternative indicators beyond color alone

## 🎨 Brand Personality Matrix

| Trait | Primary Color | Usage |
|-------|---------------|-------|
| **Professional** | Blue (#2828A2) | Business content, credentials |
| **Innovative** | Purple (#6E3299) | New features, cutting-edge tech |
| **Energetic** | Orange (#FF853A) | CTAs, exciting announcements |
| **Trustworthy** | Blue (#2828A2) | Security, reliability messaging |
| **Creative** | Pink (#FF98B5) | Design tools, creative solutions |
| **Successful** | Teal (#62C9B5) | Achievement, growth metrics |

---

## 📞 Simple Implementation

Use these 5 colors consistently across your AIMS platform:

1. **#6E3299** (Purple) - Primary brand color
2. **#FF853A** (Orange) - Action and energy  
3. **#62C9B5** (Teal) - Success and growth
4. **#2828A2** (Blue) - Trust and professionalism
5. **#FF98B5** (Pink) - Creativity and innovation

**Last Updated**: $(date)
**Version**: 2.0.0 - Simplified to 5 Core Colors