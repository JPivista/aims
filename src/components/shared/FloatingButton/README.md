# Floating Button Components

This directory contains two separate floating button components:

## 1. FloatingButton.js
**Main application buttons** - Apply Now & Enquire Now
- **Position**: Top right side, rotated 90°
- **Features**: 
  - Apply Now button (links to application portal)
  - Enquire Now button (links to enquiry form)
  - Hover effects with color changes
  - Arrow animations

## 2. QuickActionsButton.js
**Quick actions button** - + symbol with WhatsApp & Lyro AI
- **Position**: Bottom right side
- **Features**:
  - + button that expands to show options
  - WhatsApp button (green, links to WhatsApp chat)
  - Lyro AI button (blue, links to Lyro AI)
  - Click to toggle options visibility
  - Smooth animations and hover effects

## Usage

### Import both components:
```jsx
import FloatingButton from '@/shared/FloatingButton';
import QuickActionsButton from '@/shared/FloatingButton/QuickActionsButton';
```

### Use in your layout:
```jsx
function Layout() {
  return (
    <>
      <FloatingButton />
      <QuickActionsButton />
      {/* Your other content */}
    </>
  );
}
```

## Customization

- **Colors**: Update the `bg-[#9c2474]` and `hover:bg-[#FF7F02]` classes
- **Positions**: Modify the `right-4`, `top-[35%]`, `bottom-[20%]` classes
- **Links**: Update the `href` attributes in the Link components
- **Icons**: Change the imported icons from react-icons
